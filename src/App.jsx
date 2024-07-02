import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './home/home'
import './App.css'
import About from './about/about'
import { 
  EmployeeTutorialScreen,
  EmployeeLoginLogoutTutorial,
  EmployeeProductSelectionTutorial,
  EmployeePaymentTutorial,
  EmployeeQueueTutorial,
  EmployeeTransactionHistoryTutorial,
  EmployeeInventoryManagementTutorial
} from './employee-tutorial/employee_tutorial'

import {
  AdminTutorialScreen,
  AdminLoginLogoutTutorial,
  AdminSalesReportsTutorial,
  AdminForecastReportTutorial,
  AdminTransactionsTutorial,
  AdminActivityLogsTutorial,
  AdminInventoryManagementTutorial,
  AdminOrderSettingsTutorial,
  AdminCategoriesTutorial,
  AdminVouchersTutorial,
  AdminProductsTutorial,
  AdminBranchesTutorial,
  AdminEmployeesTutorial
} from './admin-tutorial/admin_tutorial'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/employee/help" element={<EmployeeTutorialScreen />} />
        <Route path="/employee/help/login-logout" element={<EmployeeLoginLogoutTutorial />} />
        <Route path="/employee/help/product-selection" element={<EmployeeProductSelectionTutorial />} />
        <Route path="/employee/help/payment" element={<EmployeePaymentTutorial />} />
        <Route path="/employee/help/queue" element={<EmployeeQueueTutorial />} />
        <Route path="/employee/help/inventory" element={<EmployeeInventoryManagementTutorial />} />
        <Route path="/employee/help/transaction-history" element={<EmployeeTransactionHistoryTutorial />} />

        <Route path="/admin/help" element={<AdminTutorialScreen />} />
        <Route path="/admin/help/login-logout" element={<AdminLoginLogoutTutorial />} />
        <Route path="/admin/help/sales-report" element={<AdminSalesReportsTutorial />} />
        <Route path="/admin/help/forecast-report" element={<AdminForecastReportTutorial />} />
        <Route path="/admin/help/transactions" element={<AdminTransactionsTutorial />} />
        <Route path="/admin/help/activity-logs" element={<AdminActivityLogsTutorial />} />
        <Route path="/admin/help/inventory-management" element={<AdminInventoryManagementTutorial />} />
        <Route path="/admin/help/order-settings" element={<AdminOrderSettingsTutorial />} />
        <Route path="/admin/help/category" element={<AdminCategoriesTutorial />} />
        <Route path="/admin/help/voucher" element={<AdminVouchersTutorial />} />
        <Route path="/admin/help/product" element={<AdminProductsTutorial />} />
        <Route path="/admin/help/branch" element={<AdminBranchesTutorial />} />
        <Route path="/admin/help/employee" element={<AdminEmployeesTutorial />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
