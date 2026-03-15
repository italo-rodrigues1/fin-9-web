import { Navigate, Route, Routes } from 'react-router-dom';
import { AccountDeletionPage } from './pages/AccountDeletionPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AccountDeletionPage />} />
      <Route path="/politica-de-privacidade" element={<PrivacyPolicyPage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
