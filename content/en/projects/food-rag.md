---
title: Nutritional Information RAG
date: 2024-07-20
description: A RAG service to extract nutritional information for food items using both OpenAI and open-source models.
image: /images/projects/rag.jpg
alt: Nutritional Information RAG
tags: ['python', 'rag', 'llm', 'openai', 'llama', 'qwen']
technologies: ['python', 'rag', 'llm', 'openai', 'llama', 'qwen', 'fastapi', 'modal']
github: 'https://github.com/federicoibba/nutritional-information-rag'
locale: 'en'
---

## Description

This project provides a Retrieval-Augmented Generation (RAG) service to extract nutritional information for food items using both OpenAI and open-source models, including Qwen and Llama. The workflow is organized in a series of Jupyter notebooks, modular Python services, and a final deployable API service.

## How it Works

1.  **Data Preparation:** The dataset is cleaned and relevant columns are selected in the first notebook.
2.  **Vector Store Creation:** Food descriptions are embedded and stored in a vector database for semantic search.
3.  **RAG Pipeline:** Given a food description, the system retrieves the most relevant entries from the vector store and uses a language model (OpenAI, Llama, or Qwen) to extract the proper food information.
4.  **API Service:** The FastAPI-based service exposes a `/get_nutritional_data` endpoint (POST) that accepts a food description and returns nutritional information in JSON format. Both Llama and Qwen-based services are available.

## Project Structure

*   `datasets/food.csv` and `datasets/food_dataset.csv`: Raw and processed food nutrition datasets used as the data source for the project.
*   `notebooks/`: the folder contains all the experiments and the vector database creations.
*   `services/`: directory with all the services created.

## Deploy

The service is deployed online using [modal.com](https://modal.com) service.