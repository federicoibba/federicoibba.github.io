---
title: RAG per Informazioni Nutrizionali
date: 2024-07-20
description: Un servizio RAG per estrarre informazioni nutrizionali per alimenti utilizzando sia modelli OpenAI che open-source.
image: /images/projects/rag.jpg
alt: RAG per Informazioni Nutrizionali
tags: ['python', 'rag', 'llm', 'openai', 'llama', 'qwen']
technologies: ['python', 'mongodb', 'rag', 'llm', 'openai', 'llama', 'qwen', 'fastapi', 'modal']
github: 'https://github.com/federicoibba/nutritional-information-rag'
article: /a-nutritional-llm-assistant-using-rag
locale: 'it'
---

## Descrizione

In questo progetto ho esplroato e studiato come creare un **Retrieval-Augmented Generation (RAG)** per estrarre informazioni nutrizionali per alimenti utilizzando sia modelli OpenAI che open-source, come Qwen e Llama. Nella prima fase, sono stati condotti esperimenti in notebook Jupyter per convalidare l'approccio; nella fase finale, i risultati sono stati distribuiti come servizio serverless su <a href="https://modal.com/" target="_blank">modal.com</a>.

## Come funziona

1.  **Preparazione dei dati:** Il dataset viene pulito e le colonne pertinenti vengono selezionate nel primo notebook.
2.  **Creazione del Vector Store:** Le descrizioni degli alimenti vengono prima trasformate in vettori, quindi salvate in <a href="https://www.mongodb.com/" target="_blank">MongoDB</a>.
3.  **Creazione dell'indice di ricerca vettoriale:** Viene creato un indice di ricerca per interrogare gli alimenti in base alla similarità del nome dell'alimento fornito.
4.  **Pipeline RAG:** Data una descrizione di un alimento, il sistema recupera le voci più pertinenti dal vector store e utilizza un LLM (OpenAI, Llama o Qwen) per estrarre le informazioni alimentari corrette.
5.  **Servizio API:** Il servizio basato su FastAPI espone un endpoint `/get_nutritional_data` (POST) che accetta una descrizione di un alimento e restituisce le informazioni nutrizionali in formato JSON. Sono stati distribuiti in totale tre servizi: uno GPT-4o mini che esegue richieste API a OpenAI utilizzando la sua chiave API e due servizi basati su modelli open-source che utilizzano modelli molto piccoli di Qwen e Llama.


## Struttura del progetto

*   `datasets/food.csv` e `datasets/food_dataset.csv`: Dataset sulla nutrizione alimentare grezzi e processati utilizzati come fonte di dati per il progetto.
*   `notebooks/`: la cartella contiene tutti gli esperimenti e le creazioni del database vettoriale.
*   `services/`: directory con tutti i servizi creati.

## Deploy

Il servizio è distribuito online utilizzando <a href="https://modal.com/" target="_blank">modal.com</a>, una piattaforma serverless progettata per applicazioni di intelligenza artificiale e machine learning. Offrono un buon piano gratuito per la sperimentazione, con crediti mensili da 5 a 30 dollari.
