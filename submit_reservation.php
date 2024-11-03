<?php
// Database credentials
$servername = "localhost:3309";
$username = "root";
$password = "";
$dbname = "cafe_db";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$reservation_date = $_POST['reservation_date'];
$reservation_time = $_POST['reservation_time'];
$name = $_POST['name'];
$phone = $_POST['phone'];
$comments = $_POST['comments'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO reservations (reservation_date, reservation_time, name, phone, comments) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $reservation_date, $reservation_time, $name, $phone, $comments);

// Execute the statement
if ($stmt->execute()) {
    echo "Reservation saved successfully!";
} else {
    echo "Error: " . $stmt->error;
}

// Close connections
$stmt->close();
$conn->close();
?>
