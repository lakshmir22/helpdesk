import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import ForgotPassword from "./pages/auth/ForgotPassword";
import { UserDashboard } from "./pages/Dashboard";
import MyTickets from "./pages/MyTickets";
import NewTicket from "./pages/NewTicket";
import Profile from "./pages/Profile";
import TicketApproval from "./pages/TicketApproval";
import Performance from "./pages/Performance";
import AdminDashboard from "./pages/admin/AdminDashboard";
import AdminDatabase from "./pages/admin/AdminDatabase";
import AdminSettings from "./pages/admin/AdminSettings";
import AdminUserLog from "./pages/admin/AdminUserLog";
import AdminProfile from "./pages/admin/AdminProfile";
import NotFound from "./pages/NotFound";
import OperationMyTickets from "./pages/OperationMyTickets";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Auth routes */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          
          {/* Protected routes */}
          <Route path="/" element={<Navigate to="/dashboard" replace />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route path="dashboard" element={
              (localStorage.getItem('userRole') === 'operation' || localStorage.getItem('userRole') === 'admin')
                ? <AdminDashboard />
                : <UserDashboard />
            } />
            <Route path="ticket-approval" element={<TicketApproval />} />
            <Route path="my-tickets" element={
              (localStorage.getItem('userRole') === 'operation' || localStorage.getItem('userRole') === 'technical')
                ? <OperationMyTickets />
                : <MyTickets />
            } />
            <Route path="new-ticket" element={<NewTicket />} />
            <Route path="performance" element={<Performance />} />
            <Route path="profile" element={<Profile />} />
            <Route path="admin-dashboard" element={<AdminDashboard />} />
            <Route path="admin-database" element={<AdminDatabase />} />
            <Route path="admin-settings" element={<AdminSettings />} />
            <Route path="admin-user-log" element={<AdminUserLog />} />
            <Route path="admin-profile" element={<AdminProfile />} />
          </Route>
          
          {/* Catch-all route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
