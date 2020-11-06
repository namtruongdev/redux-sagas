import 'antd/dist/antd.css';
import './App.css';
import Users from './components/Users';
import { Card } from 'antd';
const { Meta } = Card;

function App() {
  return (
    <div className="app">
      <Users
        render={(user) => (
          <Card
            key={user.id}
            hoverable
            style={{ width: 240, margin: 15, animation: 'wellcome 1s ease-in' }}
            cover={<img alt="avatar" src={`${user.avatar}`} />}
          >
            <Meta title={user.name} description={user.website} />
          </Card>
        )}
      />
    </div>
  );
}

export default App;
