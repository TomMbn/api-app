# api-app

## Description

`api-app` est un microservice qui interagit avec une base de données MySQL et consomme les services d'auth-app pour l'authentification des utilisateurs. Il expose une API REST permettant de gérer des données sécurisées avec JWT.

## Fonctionnalités

- Vérification et validation des tokens JWT générés par auth-app.
- Interaction avec une base de données MySQL.
- Exposition d'API REST pour gérer les ressources.
- Gestion sécurisée des credentials via Vault (optionnel).

## Installation

1. Clonez le dépôt :
    ```sh
    git clone https://github.com/TomMbn/api-app
    ```
2. Installez les dépendances :
    ```sh
    cd api-app
    npm install
    ```

## Configuration

Copiez le fichier `.env.example` en `.env` et modifiez les variables d'environnement selon vos besoins :
```sh
cp .env.example .env
