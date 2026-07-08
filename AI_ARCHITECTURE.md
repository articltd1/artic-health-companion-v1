# AI Architecture (future vision)

Overview
- Centralized AI services will be provided via an AI gateway service that brokers requests to upstream providers (OpenAI, HuggingFace, local models).

Principles
- Keep prompts, user data, and PII handling auditable and separated from model calls.
- Provide a pluggable provider adapter layer.
- Implement request/response logging with redaction for PII and sensitive tokens.

Components
- AI Gateway (public/internal API)
- Provider adapters (OpenAI, HuggingFace, local LLM)
- Prompt store and templates
- Audit log store for model inputs/outputs (redacted)

Security
- Require API keys stored in a secrets manager for production.
- Mask or redact PII before storing outputs.
