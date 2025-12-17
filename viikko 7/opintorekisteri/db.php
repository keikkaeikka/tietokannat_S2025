<?php
$host = "localhost";
$dbname = "arvioinnit";
$user = "eikka";
$pass = "eikka"; // UniServerin oletus

try {
    $pdo = new PDO(
        "mysql:host=$host;dbname=$dbname;charset=utf8",
        $user,
        $pass
    );
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Tietokantavirhe: " . $e->getMessage());
}
