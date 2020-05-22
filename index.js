const express = require('express');
const app = express();
const courses = [
  { id: 1, course: 'couse1' },
  { id: 2, course: 'couse2' },
  { id: 3, course: 'couse3' },
];

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/courses', (req, res) => {
  res.send(courses);
});

app.get('/courses/:id', (req, res) => {
  const course = courses.find((item) => item.id === parseInt(req.params.id));
  console.log(course);

  if (!course) res.status(404).send('course with the given id is not found');
  res.send(course);
});
app.listen(3000, () => console.log('app is listening on port 3000'));
