<?php
require __DIR__ . '/../../db.php';

$data = json_decode(file_get_contents("php://input"), true);

$sql = "INSERT INTO opiskelija (etunimi, sukunimi, osoite, luokkatunnus)
        VALUES (:etunimi, :sukunimi, :osoite, :luokkatunnus)";

$stmt = $pdo->prepare($sql);
$stmt->execute([
    "etunimi" => $data["etunimi"],
    "sukunimi" => $data["sukunimi"],
    "osoite" => $data["osoite"],
    "luokkatunnus" => $data["luokkatunnus"]
]);

echo json_encode(["message" => "Opiskelija lisätty"]);
