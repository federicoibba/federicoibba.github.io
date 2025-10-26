---
title: RAG per Informazioni Nutrizionali
date: 2024-07-20
description: Un servizio RAG per estrarre informazioni nutrizionali per alimenti utilizzando sia modelli OpenAI che open-source.
image: /images/projects/rag.jpg
alt: RAG per Informazioni Nutrizionali
tags: ['python', 'rag', 'llm', 'openai', 'llama', 'qwen']
technologies: ['python', 'rag', 'llm', 'openai', 'llama', 'qwen', 'fastapi', 'modal']
github: 'https://github.com/federicoibba/nutritional-information-rag'
locale: 'it'
---

## Descrizione

Questo progetto fornisce un servizio di Retrieval-Augmented Generation (RAG) per estrarre informazioni nutrizionali per alimenti utilizzando sia modelli OpenAI che open-source, tra cui Qwen e Llama. Il flusso di lavoro è organizzato in una serie di notebook Jupyter, servizi Python modulari e un servizio API.

## Come funziona

1.  **Preparazione dei dati:** Il dataset viene pulito e le colonne pertinenti vengono selezionate nel primo notebook.
2.  **Creazione del Vector Store:** Le descrizioni degli alimenti vengono trasformate in vettori e archiviate in un database vettoriale per la ricerca semantica.
3.  **Pipeline RAG:** Data una descrizione di un alimento, il sistema recupera le voci più pertinenti dal database vettoriale e utilizza un modello linguistico (OpenAI, Llama o Qwen) per estrarre le informazioni adeguate.
4.  **Servizio API:** Il servizio basato su FastAPI espone un endpoint `/get_nutritional_data` (POST) che accetta la descrizione di un alimento e restituisce le informazioni nutrizionali in formato JSON. Sono disponibili sia i servizi basati su Llama che su Qwen.

## Struttura del progetto

*   `datasets/food.csv` e `datasets/food_dataset.csv`: dataset sulla nutrizione alimentare grezzi e processati utilizzati come fonte di dati per il progetto.
*   `notebooks/`: la cartella contiene tutti gli esperimenti e la creazione del database vettoriale.
*   `services/`: directory con tutti i servizi creati.

## Deploy

Il servizio è distribuito online utilizzando il servizio [modal.com](https://modal.com).