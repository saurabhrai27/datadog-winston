# Datadog Integration with Winston Logger

This project demonstrates how to integrate Datadog with Winston Logger to send live logs to Datadog using the Datadog API. With this integration, you can monitor and analyze logs without installing the Datadog agent on your machine.

## Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/saurabhrai27/datadog-winston.git
    ```

2. Navigate to the project directory:

    ```bash
    cd datadog-winston
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up environment variables:

    - Create a `.env` file in the root directory.
    - Add the following environment variables to the `.env` file:

        ```plaintext
        ENV=DEV
        LOG_LEVEL=info
        APPLICATION_NAME=your_application_name
        DATADOG_APP_KEY_DEV=your_datadog_application_key_for_dev_environment
        DATADOG_APP_KEY_PROD=your_datadog_application_key_for_prod_environment
        DATADOG_API_KEY_DEV=your_datadog_api_key_for_dev_environment
        DATADOG_API_KEY_PROD=your_datadog_api_key_for_prod_environment
        DATADOG_ENABLED_LOGS=true
        ```

    Replace `your_application_name`, `your_datadog_application_key_for_dev_environment`, `your_datadog_application_key_for_prod_environment`, `your_datadog_api_key_for_dev_environment`, and `your_datadog_api_key_for_prod_environment` with your actual values.

## Usage

To run the application, execute:

```bash
node src/index.js
```

This will start the logger and send logs to Datadog based on the configuration provided in the `.env` file.

## Configuration

- `ENV`: Set the environment (e.g., `DEV`, `PROD`, `QA`).
- `LOG_LEVEL`: Set the log level (default is `info`).
- `APPLICATION_NAME`: Set the name of your application.
- `DATADOG_APP_KEY_DEV` and `DATADOG_APP_KEY_PROD`: Datadog application keys for development and production environments, respectively.
- `DATADOG_API_KEY_DEV` and `DATADOG_API_KEY_PROD`: Datadog API keys for development and production environments, respectively.
- `DATADOG_ENABLED_LOGS`: Enable or disable sending logs to Datadog (default is `true`).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
