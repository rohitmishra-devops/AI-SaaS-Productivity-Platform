# Database Schema

## users
- id
- email
- password
- full_name
- created_at

## tasks
- id
- user_id
- title
- description
- priority
- status
- due_date

## ai_conversations
- id
- user_id
- created_at

## ai_messages
- id
- conversation_id
- role
- content
- created_at
