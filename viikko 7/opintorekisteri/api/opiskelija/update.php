<?php
header("Content-Type: application/json; charset=UTF-8");

require __DIR__ . '/../../db.php';

$data = json_decode(file_get_contents("php://input"), true);

if (
    !isset(
        $data["idopiskelija"],
        $data["Etunimi"],
        $data["Sukunimi"],
        $data["Osoite"],
        $data["Luokkatunnus"]
    )
) {
    http_response_code(400);
    echo json_encode(["error" => "Virheellinen data"]);
    exit;
}

$stmt = $pdo->prepare(
    "UPDATE opiskelija
     SET Etunimi = :Etunimi,
         Sukunimi = :Sukunimi,
         Osoite = :Osoite,
         Luokkatunnus = :Luokkatunnus
     WHERE idopiskelija = :id"
);

$stmt->execute([
    ":id" => $data["idopiskelija"],
    ":Etunimi" => $data["Etunimi"],
    ":Sukunimi" => $data["Sukunimi"],
    ":Osoite" => $data["Osoite"],
    ":Luokkatunnus" => $data["Luokkatunnus"]
]);

echo json_encode([
    "updated" => $stmt->rowCount()
]);
