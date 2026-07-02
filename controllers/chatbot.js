import config from "../src/config/environment.js";

export const query = async (data) => {
    const response = await fetch(
      `${config.apis.huggingface.baseUrl}/models/${config.apis.huggingface.modelId}`,
      {
        headers: {
          Authorization: `Bearer ${config.apis.huggingface.token}`,
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ inputs: data }),
      }
    );
    const result = await response.json();
    return result;
  }

export default query;