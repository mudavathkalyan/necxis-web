"use client";
import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  CircularProgress,
} from "@mui/material";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleLogin = () => {
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (loading) return;
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Welcome, ${result.user.displayName}`);
    } catch (error) {
      console.error("Login failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Paper
          elevation={6}
          sx={{
            padding: 4,
            borderRadius: 4,
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Sign in to Your Account
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Use your Google account to continue
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleLogin}
            disabled={loading}
            fullWidth
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Sign in with Google"
            )}
          </Button>
        </Paper>
      </Box>
    </Container>
  );
};

export default GoogleLogin;
