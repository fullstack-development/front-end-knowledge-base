# Типизация переменных окружения

Для типизации переменных окружения необходимо:

1) Иметь установленный `@types/node` пакет в вашем проекте
2) Создать в корне проекта файл `environment.d.ts` (название не имеет значения) со следующим содержимым:
    ```
    declare global {
      namespace NodeJS {
        interface ProcessEnv {
          GITHUB_AUTH_TOKEN: string;
          NODE_ENV: 'development' | 'production';
          NEXT_APP_MY_ENV: string;
          PORT?: string;
        }
      }
    }

    // If this file has no import/export statements (i.e. is a script)
    // convert it into a module by adding an empty export statement.
    export {}
    ```