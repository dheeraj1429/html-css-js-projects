<?php
require_once 'inc/config.php';
 $productname = $_POST['id'];
// $productname = 16;
$query = mysqli_query($conn, "SELECT * FROM " . $tblPrefix . "auctions WHERE id = '$productname'");

$bidingAmount =  mysqli_query($conn, "SELECT  userdata, email, MAX(amount) ,auction_id, auction_name FROM " . $tblPrefix . "bid WHERE auction_id ='$productname'");
$winassoc = mysqli_fetch_assoc($bidingAmount);
$userName = $winassoc['userdata'];
$winamount = $winassoc['MAX(amount)'];
$auctionid = $winassoc['auction_id'];
$auctionname = $winassoc['auction_name'];
$useremail = $winassoc['email'];
$data = mysqli_fetch_assoc($query);
$productname = $data['name'];
$data =  mysqli_query($conn, "INSERT INTO " . $tblPrefix . "winnig(`winner_name`, `Winner_email`, `amount`, `auction_id`,`auction_name`) VALUES ('$userName','$useremail','$winamount','$auctionid' , '$auctionname'");
if ($data) {
    echo "yes";
}
$winnercheck = mysqli_query($conn, "SELECT * FROM " . $tblPrefix . "winnig WHERE auction_id = '$auctionid'");

if (mysqli_num_rows($winnercheck) > 0) {
    echo 0;
     $auctionclose =  mysqli_query($conn,"UPDATE `bnmi_auctions` SET `status` = '3' WHERE id = '$auctionid';");
} else {
    $bidinginsert =  mysqli_query($conn, "INSERT INTO " . $tblPrefix . "winnig(`winner_name`, `Winner_email`, `amount`, `auction_id`,`auction_name`) VALUES ('$userName','$useremail','$winamount','$auctionid' , '$auctionname')");
    $auctionclose =  mysqli_query($conn,"UPDATE `bnmi_auctions` SET `status` = '3' WHERE id = '$auctionid';");
    if ($bidinginsert) {
        if (updateWallet($winamount)) {
            makeAuctionTransaction($winamount, $auctionid);
            echo 1;
        }
        if($auctionclose){
            echo 2;
        }
    }
}
