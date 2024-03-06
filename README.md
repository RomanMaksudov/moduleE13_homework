Установить и настроить webpack-dev-server.
Настроить hot module replacement.
Сделать возможность запуска на разных окружениях (dev, prod) c разной конфигурацией (например, убрать HMR на проде).
Настроить JSON-server и отображать полученные с него данные.
Добавить запуск линтера при комите.

Команды для реализации:
npm init
npm install webpack webpack-cli --save-dev
npx webpack
npm install parcel-bundler --dev
npm install html-webpack-plugin --save-dev
npm install --save-dev webpack-dev-server
npx webpack-dev-server
npm install -g json-server
json-server --watch database.json