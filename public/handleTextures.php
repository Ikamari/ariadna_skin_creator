<?php
header('Access-Control-Allow-Origin: http://skins.ariadna.loc');

$mainHeadTextures = array_diff( scandir( "./img/main/head", 1), array('..', '.'));
$mainBodyTextures = array_diff( scandir( "./img/main/body", 1), array('..', '.'));
$mainHandTextures = array_diff( scandir( "./img/main/hand", 1), array('..', '.'));
$mainLegTextures = array_diff( scandir( "./img/main/leg", 1), array('..', '.'));

$armorHeadTextures = array_diff( scandir( "./img/armor/head", 1), array('..', '.'));
$armorBodyTextures = array_diff( scandir( "./img/armor/body", 1), array('..', '.'));
$armorHandTextures = array_diff( scandir( "./img/armor/hand", 1), array('..', '.'));
$armorLegTextures = array_diff( scandir( "./img/armor/leg", 1), array('..', '.'));

$textures = [
    [
        "head" => $mainHeadTextures,
        "body" => $mainBodyTextures,
        "hand" => $mainHandTextures,
        "leg" => $mainLegTextures
    ],
    [
        "head" => $armorHeadTextures,
        "body" => $armorBodyTextures,
        "hand" => $armorHandTextures,
        "leg" => $armorLegTextures
    ]
];

echo (json_encode($textures));