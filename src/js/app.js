window.jQuery = window.$ = require('jquery');
window.Popper = require('popper.js');
window.SlackHawkDown = require('slack-hawk-down');
require('bootstrap');

$(() => {
  $('[data-toggle="tooltip"]').tooltip();
});

$(() => {
  $.ajax({
    url: 'https://stastics.codefor.kr/slack.json',
    success: (data) => {
      const announcement = $('#announcement');
      announcement.find('.content').html(SlackHawkDown.escapeForSlackWithMarkdown(data.latestAnnouncement.body.replace('\n\n', '\n')));
      announcement.find('.created_at').text(new Date(data.latestAnnouncement.createdAt).toLocaleDateString());
      announcement.find('.username').text(data.latestAnnouncement.user);
    }
  })
});