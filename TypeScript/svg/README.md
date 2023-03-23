# Типизация SVG компонентов при использовании SVGR

Во многих фреймворках встроен SVGR, который позволяет подключать svg-файлы как реакт-компоненты. Проблема в том, что у такого компонента напрочь отсутствует типизация, ему можно передать любые пропсы. Решить эту проблему можно следующим образом: 
  1. создайте файл `svg.d.ts.` (название не имеет значения) со следующим содержимым: 
      ```ts
        declare module '*.svg' {
        import * as React from 'react';

        export const ReactComponent: React.FunctionComponent<
          React.SVGProps<SVGSVGElement> & { title?: string }
        >;

        const src: string;
        export default src;
      }
      ```   
  2. Добавьте путь к файлу в массив `include` в вашем `tsconfig.json` (в примере файл находится в корне проекта): 
  ![image](https://user-images.githubusercontent.com/90761929/222449468-db502f0b-1997-445a-91b9-e9ee8e96d8ee.png)
  3. Далее при импорте svg - файла вам надо будет писать:
      ```ts
        import { ReactComponent as DisableIcon } from './icons/disable.svg';
        import { ReactComponent as EnableIcon } from './icons/enable.svg';
      ```   
      Но эту запись можно улучшить. Создайте файл `index.ts` в папке `icons` и сделайте там реэкспорт ваших svg-файлов:
      ```ts
        export { ReactComponent as DisableIcon } from './icons/disable.svg';
        export { ReactComponent as EnableIcon } from './icons/enable.svg';
      ```   
      Теперь у вас будет красивый импорт и типизированные svg: 
      ```ts
        import { DisableIcon, EnableIcon } from './icons';
      ```   