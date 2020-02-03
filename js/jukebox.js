var jukebox_entries_max = 2;
var jukebox_entries = new Array(jukebox_entries_max);
jukebox_entries[0] = {
  id: 0,
  name: "Downtown Psychedelic (by Fearofdark)",
  path: "/audio/[0]_locher_dp.mp3"
};
jukebox_entries[1] = {
  id: 1,
  name: "Godot (by TQ-Jam))",
  path: "/audio/[1]_locher_g.mp3"
};

$(document).ready(function() {
  document.getElementById("track_title").style.display = "none";
  document.getElementById("jukebox_player").style.display = "none";
});

function setNewTrack() {
  var random_track = jukebox_entries[randomize($("#jukebox_source").attr("track-ID"))];
  $("#track_title").text(random_track.name);
  $("#jukebox_source").attr("src", random_track.path);
  $("#jukebox_source").attr("track-ID", random_track.id);
  $("#jukebox_player")[0].load();
  document.getElementById("track_title").style.display = "block";
  document.getElementById("jukebox_player").style.display = "inline";
}

function randomize(id = -1) {
  var num = Math.floor(Math.random() * jukebox_entries_max);
  return num == id ? randomize(id) : num;
}
