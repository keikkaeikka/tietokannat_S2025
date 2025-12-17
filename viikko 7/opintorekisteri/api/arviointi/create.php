<?php
header("Content-Type: application/json; charset=UTF-8");

require __DIR__ . '/../../db.php';

// Luetaan JSON-body
$data = json_decode(file_get_contents("php://input"), true);

// Tarkistetaan kentät
if (!isset($data["idopiskelija"], $data["idopintojakso"], $data["päivämäärä"], $data["arvosana"])) {
    http_response_code(400);
    echo json_encode(["error" => "Puuttuva kenttä"]);
    exit;
}

// Valmistellaan SQL
$stmt = $pdo->prepare(
    "INSERT INTO arviointi (idopiskelija, idopintojakso, päivämäärä, arvosana)
     VALUES (:idopiskelija, :idopintojakso, :paivamaara, :arvosana)"
);

// Suoritetaan
$stmt->execute([
    ":idopiskelija" => $data["idopiskelija"],
    ":idopintojakso" => $data["idopintojakso"],
    ":paivamaara" => $data["päivämäärä"],
    ":arvosana" => $data["arvosana"]
]);

// Palautetaan onnistuminen
echo json_encode([
    "success" => true,
    "id" => $pdo->lastInsertId()
]);
