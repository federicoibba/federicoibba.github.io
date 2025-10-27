---
title: Nutritional Information RAG
date: 2024-07-20
description: A RAG service to extract nutritional information for food items using both OpenAI and open-source models.
image: /images/projects/rag.jpg
alt: Nutritional Information RAG
tags: ['Python', 'RAG', 'LLM', 'MongoDB', 'OpenAI', 'Llama', 'Qwen']
technologies: ['Python', 'MongoDB', 'RAG', 'LLM', 'OpenAI', 'Llama', 'Qwen', 'FastAPI', 'modal']
github: 'https://github.com/federicoibba/nutritional-information-rag'
article: /a-nutritional-llm-assistant-using-rag
locale: 'en'
---

## Description

This project provides a **Retrieval-Augmented Generation (RAG**)** service to extract nutritional information for food items using both OpenAI and open-source models, such as Qwen and Llama. In the first phase, experiments were conducted in Jupyter notebooks to validate the approach; in the final phase, the results were deployed as a serverless service on <a href="https://modal.com/" target="_blank">modal.com</a>.

## How it Works

1.  **Data Preparation:** The dataset is cleaned and relevant columns are selected in the first notebook.
2.  **Vector Store Creation:** Food descriptions are first transformed into vectors, then stored in <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>.
3.  **Vector Search Index Creation:** A search index is created for querying foods based on name similarity.
4.  **RAG Pipeline:** Given a food description, the system retrieves the most relevant entries from the vector store and uses a language model (OpenAI, Llama, or Qwen) to extract the proper food information.
5.  **API Service:** The FastAPI-based service exposes a `/get_nutritional_data` endpoint (POST) that accepts a food description and returns nutritional information in JSON format. A total of three services have been deployed: a GPT-4o mini one that performs API requests to OpenAI using its API key, and two open-source model-based services using very small models from Qwen and Llama.


## Project Structure

*   `datasets/food.csv` and `datasets/food_dataset.csv`: Raw and processed food nutrition datasets used as the data source for the project.
*   `notebooks/`: the folder contains all the experiments and the vector database creations.
*   `services/`: directory with all the services created.

## Deploy

The service is deployed online using <a href="https://modal.com/" target="_blank">modal.com</a>, a serverless compute platform designed for AI and Machine Learning applications. They offer a generous free tier for experimenting, starting from $5 to $30 monthly credits.