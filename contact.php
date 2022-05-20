<?php

// koneksi database
include 'koneksi.php';

// menangkap data yang di kirim dari form
$name = $_POST['name'];
$rsvp = $_POST['rsvp'];
$message = $_POST['message'];

// mysqli_query($koneksi, "insert into ucapan values ('$name','$rsvp','$message')");

$insert = mysqli_query($koneksi, "insert into ucapan set name='$name', rsvp='$rsvp', message='$message'");

header("location:index.php");
