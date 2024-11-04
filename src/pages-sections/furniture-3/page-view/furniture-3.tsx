"use client";

import { Fragment, useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import axios from "axios";

import Setting from "components/settings";
import Section1 from "../section-1/section-1";
import Footer from "../../../components/footer/footer-3";

const apiKey = "AIzaSyDaR_7kqhw_mSZy-pxxuOkWEyXmXKBfm7w";

export default function FurnitureThreePageView() {
  const [currentLocation, setCurrentLocation] = useState("");
  const [placeName, setPlaceName] = useState("");
  const [openDialog, setOpenDialog] = useState(false);
  const [showPermissionDialog, setShowPermissionDialog] = useState(false);

  useEffect(() => {
    checkLocationPermission();
  }, []);

  // Check location permission status
  const checkLocationPermission = () => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then((permissionStatus) => {
          if (permissionStatus.state === "granted") {
            getLocation();
          } else if (permissionStatus.state === "prompt") {
            setShowPermissionDialog(true);
          } else {
            setCurrentLocation("Location access denied.");
            setOpenDialog(true);
          }

          // Update if permission status changes
          permissionStatus.onchange = () => {
            if (permissionStatus.state === "granted") {
              getLocation();
            } else if (permissionStatus.state === "denied") {
              setCurrentLocation("Location access denied.");
              setOpenDialog(true);
            }
          };
        });
    } else {
      setCurrentLocation("Geolocation is not supported by this browser.");
      setOpenDialog(true);
    }
  };

  // Get current location coordinates with high accuracy
  const getLocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log("Latitude:", latitude, "Longitude:", longitude); // Log coordinates for debugging
        setCurrentLocation(`Latitude: ${latitude}, Longitude: ${longitude}`);
        reverseGeocode(latitude, longitude); // Convert coordinates to address
      },
      (error) => {
        console.error("Error getting location:", error);
        setCurrentLocation("Error getting location.");
        setOpenDialog(true);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );
  };

  // Reverse geocode to get address from coordinates
  const reverseGeocode = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`
      );
      console.log("Geocode response:", response.data); // Log API response for debugging
      if (response.data.results.length > 0) {
        const address = response.data.results[0].formatted_address;
        setPlaceName(address);
      } else {
        setPlaceName("Address not found");
      }
      setOpenDialog(true);
    } catch (error) {
      console.error("Error fetching place name:", error);
      setPlaceName("Error fetching place name.");
      setOpenDialog(true);
    }
  };

  const handlePermissionRequest = () => {
    setShowPermissionDialog(false);
    getLocation(); // Prompt location access
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleClosePermissionDialog = () => {
    setShowPermissionDialog(false);
  };

  return (
    <Fragment>
      <Typography
        variant="h6"
        style={{ marginTop: "20px" }}
        gutterBottom
        sx={{
          fontSize: {
            xs: "1rem",
            sm: "1.25rem",
            md: "1.5rem",
            lg: "1rem",
            xl: "2rem",
          },
          fontWeight: "600",
        }}
      >
        Find property at best Prices
      </Typography>

      <div
        className="sm:p-4 md:p-6 lg:p-8 text-left"
        style={{
          margin: "20px 0 30px 0",
          border: "1px solid #ddd",
          padding: "14px",
          borderRadius: "8px",
        }}
      >
        <h2 className="font-bold mb-1" style={{ fontSize: "1rem" }}>
          Destination
        </h2>
        <p style={{ fontSize: "0.8rem", color: "#666" }}>
          Search for city, location, or hotel
        </p>
      </div>

      {/* Dialog to show current location */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Current Location</DialogTitle>
        <DialogContent>
          <p style={{ fontSize: "0.9rem", color: "#333" }}>
            {currentLocation}
          </p>
          {placeName && (
            <p style={{ fontSize: "0.9rem", color: "#333" }}>
              Address: {placeName}
            </p>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleCloseDialog}
            style={{ marginTop: "10px" }}
          >
            Close
          </Button>
        </DialogContent>
      </Dialog>

      {/* Dialog to request location permission */}
      <Dialog open={showPermissionDialog} onClose={handleClosePermissionDialog}>
        <DialogTitle>Location Permission Required</DialogTitle>
        <DialogContent>
          <p style={{ fontSize: "0.9rem", color: "#333" }}>
            This app needs access to your location to provide better services.
            Please allow location access.
          </p>
          <Button
            variant="contained"
            color="primary"
            onClick={handlePermissionRequest}
            style={{ marginTop: "10px" }}
          >
            Allow Access
          </Button>
          <Button
            variant="outlined"
            onClick={handleClosePermissionDialog}
            style={{ marginTop: "10px", marginLeft: "10px" }}
          >
            Deny
          </Button>
        </DialogContent>
      </Dialog>

      <Section1 />
      <Setting />
      <Footer />
    </Fragment>
  );
}
