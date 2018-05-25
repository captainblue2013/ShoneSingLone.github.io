import HomePage from '@/pages/home/components/HomePage';
import PanelDeploy from '@cc/PanelDeploy';


export default {
  path: '/tool',
  name: 'test',
  component: HomePage,
  children: [{
    path: 'deploy',
    name: 'tool.deploy',
    component: PanelDeploy
  }]
}
