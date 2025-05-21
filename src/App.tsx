import { Button, DatePicker, Space } from 'antd'; // Importez les composants AntD que vous souhaitez utiliser

function App() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100 p-4 w-screen">
      <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md text-center">
        <div className="text-xl font-medium text-black mb-4">SPM Frontend</div>
        <p className="text-slate-500 mb-6">Tailwind CSS & Ant Design sont configurés !</p>
        
        <Space direction="vertical" size="large">
          <Space wrap>
            <Button type="primary">Bouton Principal AntD</Button>
            <Button>Bouton AntD par Défaut</Button>
          </Space>
          
          <div>
            <p className="text-slate-700 mb-2">Choisissez une date :</p>
            <DatePicker />
          </div>
        </Space>

        <button className="mt-8 px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50">
          Bouton Tailwind CSS
        </button>
      </div>
    </div>
  )
}

export default App