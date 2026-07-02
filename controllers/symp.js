import axios from 'axios';
import * as crypto from 'crypto';
import * as fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import puppeteer from 'puppeteer';
import config from '../src/config/environment.js';
import logger from '../src/common/services/logger.service.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const symptomsFilePath = path.resolve(__dirname, 'symptoms.json');

const AUTH_SERVICE_URL = `${config.apis.priaid.baseUrl}/login`;
const API_KEY = config.apis.priaid.apiKey;
const SECRET_KEY = config.apis.priaid.secretKey;

const getAccessToken = async () => {
    const uri = AUTH_SERVICE_URL;
    const hashedCredentials = crypto
      .createHmac('md5', Buffer.from(SECRET_KEY, 'utf-8'))
      .update(uri, 'utf-8')
      .digest('base64');
  
    const authHeader = `Bearer ${API_KEY}:${hashedCredentials}`;
  
    const authResponse = await axios.post(
      AUTH_SERVICE_URL,
      {},
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader,
        },
      }
    );
  
    return authResponse.data.Token;
};

const readSymptomsFromFile = async () => {
  try {
    const data = await fs.readFile(symptomsFilePath, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    logger.error('Error reading symptoms from file', { message: error.message });
    throw error;
  }
};

async function scrapeArticles(symptoms, gender, age, diseases) {
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const agee=currentYear-age;

  try {
    const searchQuery = `${symptoms} ${agee+"years old"} ${gender} ${diseases}`.replace(/\s+/g, '+');
    const url = `https://www.webmd.com/search?query=${searchQuery}&filter=Article`;

      const browser = await puppeteer.launch();
      const page = await browser.newPage();
      await page.goto(url);

      // Wait for the search results to be loaded
      await page.waitForSelector('.search-results-title-link');

      // Extract article titles, descriptions, and links
      const articles = await page.evaluate(() => {
        const articlesData = [];
        const titles = document.querySelectorAll('.search-results-title-link');
        const descriptions = document.querySelectorAll('.search-results-description');
        const links = document.querySelectorAll('.search-results-title-link');

          titles.forEach((title, index) => {
              const article = {
                  title: title.textContent.trim(),
                  description: descriptions[index].textContent.trim(),
                  link: links[index].getAttribute('href')
              };
              articlesData.push(article);
          });

          return articlesData;
      });

      await browser.close();
      return articles;
    } catch (error) {
      logger.error('Error scraping articles', { error });
      throw error;
    }
}



// symptomate API call
export const getDiagnosis = async (userSymptoms, gender, yearOfBirth) => {
  try {
    // getting the access token
    const token = await getAccessToken();

    // API endpoint to get diseases
    const apiUrl = 'https://healthservice.priaid.ch/diagnosis';

    // Make the request
    const response = await axios.get(apiUrl, {
      params: {
        symptoms: JSON.stringify(userSymptoms),
        gender,
        year_of_birth: yearOfBirth,
        token,
        format: 'json',
        language: 'en-gb',
      },
    });
    // Extract and return only disease names
    const diseases = response.data.map(diagnosis => diagnosis.Issue.Name);

    // Scrape articles related to the symptoms, gender, year of birth, and disease names
    const articles = await scrapeArticles(userSymptoms, gender, yearOfBirth, diseases);

    return { diseases, articles };
  } catch (error) {
    logger.error('Error in Symptomate API request', { error: error.response ? error.response.data : error.message });
    throw error;
  }
};

export default getDiagnosis;
