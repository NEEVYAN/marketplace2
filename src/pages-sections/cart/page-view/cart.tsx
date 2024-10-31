"use client";

import { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import useCart from "hooks/useCart";
import PhoneIcon from "@mui/icons-material/Phone";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import address from "utils/__api__/address";
import { add } from "lodash";
import { colors } from "@mui/material";

// Main Cart Page Component
export default function CartPageView() {
  const { state } = useCart();
  const [activeTab, setActiveTab] = useState("pending");

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  // Dummy data with added 'status' attribute for demonstration purposes
  const cartItems = [
    { id: 1, name: "Room A", price: 1500, qty: 1, slug: "room-a", imgUrl: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg", status: "pending", location: "Varansi", address:"near gomti nagar,hanuman mandir" ,date: "2024-10-31", time: "2:00 PM" },
    { id: 2, name: "Room B", price: 1200, qty: 1, slug: "room-b", imgUrl: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg", status: "accepted", location: "Gorakhpur", address:"near gomti nagar,hanuman mandir" ,date: "2024-10-31", time: "3:00 PM" },
    { id: 3, name: "Room C", price: 1300, qty: 1, slug: "room-c", imgUrl: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg", status: "pending", location: "Delhi", address:"near gomti nagar,hanuman mandir" , date: "2024-10-31", time: "4:00 PM" },
    { id: 4, name: "Room D", price: 1800, qty: 1, slug: "room-d", imgUrl: "https://cdn.britannica.com/05/157305-004-53D5D212.jpg", status: "accepted", location: "Noida", address:"near gomti nagar,hanuman mandir" , date: "2024-10-31", time: "5:00 PM" },
  ];

  const pendingItems = cartItems.filter(item => item.status === "pending");
  const acceptedItems = cartItems.filter(item => item.status === "accepted");

  return (
    <Grid container spacing={3} sx={{ backgroundColor: "#FFFFFF"}}>
      {/* Bookings Header */}
      <Grid item xs={12}>
        <Typography variant="h4"  fontWeight="bold" align="left" gutterBottom>
          Bookings
        </Typography>
      </Grid>

      {/* Mobile Toolbar */}
      <Grid item xs={12} md={8}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          variant="fullWidth"
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Pending" value="pending" />
          <Tab label="Accepted" value="accepted" />
        </Tabs>
      </Grid>

      {/* Items List */}
      <Grid item md={8} xs={12}>
        {(activeTab === "pending" ? pendingItems : acceptedItems).map(({ id, name, imgUrl, location, date, time,address }) => (
          <CartItem
            key={id}
            id={id}
            name={name}
            imgUrl={imgUrl}
            location={location}
            date={date}
            time={time}
            address={address}
          />
        ))}
      </Grid>
    </Grid>
  );
}

// Updated CartItem Component
function CartItem({ id, name, imgUrl, location, date, time,address }) {
  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={3}>
        <Card sx={{ borderRadius: 2, overflow: "hidden" }}>
          <CardMedia
            component="img"
            height="80"
            image={imgUrl}
            alt={name}
            sx={{ objectFit: "cover" }}
          />
        </Card>
      </Grid>
      <Grid item xs={9} display="flex" flexDirection="column" justifyContent="center" sx={{ paddingLeft: 2 }}>


        <Typography style={{fontSize:"12px"}}  textTransform="uppercase">{location}</Typography>
        <Typography  fontWeight="bold">{name}</Typography>
        <Typography  style={{fontSize:"12px"}}  >{address}</Typography>

      
   
      </Grid>


      <Grid  container spacing={1} alignItems="center" sx={{ marginTop: 1 ,marginLeft:"10px",marginRight:"10px"}}>


          <Grid item xs={6} display="flex" alignItems="center" sx={{ padding: '4px 0' }}>
            <PhoneIcon fontSize="small" sx={{ marginRight: 0.5 }} />
            <Typography style={{fontSize:"12px"}} sx={{ padding: '4px' }}>Call Owner</Typography>
          </Grid>


          <Grid item xs={6} display="flex" alignItems="center" sx={{ padding: '4px 0' }}>
            <AccessTimeIcon fontSize="small" sx={{ marginRight: 0.5 }} />
            <Typography style={{fontSize:"12px"}} sx={{ padding: '4px' }}>{`${date} at ${time}`}</Typography>
          </Grid>


        </Grid>



        <div style={{ width: "100%", height: ".6px", backgroundColor: "#d9d9d9", margin: "16px 0" }}></div> 

    </Grid>
  );
}
