$(document).ready(function() {
  $('#add-task-form').on('submit', (event) => {
    event.preventDefault();
    addTask();
  });
});

let addTask = function () {
  const taskTitle = $('#add-task-input').val();
  $('#add-task-input').val('')
  const $taskItem = $('#task-template').clone().show();

  $taskItem.removeAttr('id');

  $taskItem.find('span').text('');
  $('#task-list').append($taskItem);

  $taskItem.find('p').text(taskTitle);

  let timer = new easytimer.Timer();
  timer.start();
  timer.addEventListener('secondsUpdated', function (e) {
    $taskItem.find('span').html(timer.getTimeValues().toString());
  });

  $taskItem.click(function () {
    timer.pause();
    let hours = timer.getTimeValues().hours;
    let minutes = timer.getTimeValues().minutes;

    if (minutes == 0) {
      $taskItem.remove();
      alert('Задачи длительностью менее 1 минуты не сохраняются!');
    } else {
      $taskItem.find('span').text(`${hours} Ч ${minutes} м`);
    };
  });

};
