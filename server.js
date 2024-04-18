const express = require('express');
const fs = require('fs');
const app = express();

// // Позволяет парсить JSON в теле запроса
// app.use(express.json());

// // Маршрут для обработки POST запроса и обновления JSON файла
// app.post('/api/update-json', (req, res) => {
//   // Получаем данные из тела POST запроса
//   const newData = req.body;

//   // Читаем содержимое JSON файла
//   fs.readFile('data.json', 'utf8', (err, data) => {
//     if (err) {
//       console.error('Error reading file:', err);
//       res.status(500).send('Error reading file');
//       return;
//     }

//     // Преобразуем содержимое файла в объект JavaScript
//     let jsonData = JSON.parse(data);

//     // Обновляем данные с учетом полученных данных из запроса
//     Object.assign(jsonData, newData);

//     // Записываем обновленные данные обратно в файл
//     fs.writeFile('data.json', JSON.stringify(jsonData), 'utf8', (err) => {
//       if (err) {
//         console.error('Error writing file:', err);
//         res.status(500).send('Error writing file');
//         return;
//       }
      
//       // Отправляем обновленные данные клиенту
//       res.json(jsonData);
//     });
//   });
// });

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server is running on port ${PORT}");
});