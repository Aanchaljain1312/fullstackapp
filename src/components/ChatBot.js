import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import bot from '../images/bot.webp'

const steps = [
    {
        id: '0',
        message: 'Hey user!',
        trigger: '1',
    }, {
        id: '1',
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
            { value: 1, label: 'View Courses' },
            { value: 2, label: 'Read Articles' },
 
        ],
        end: true
    }
];
 
// Creating our own theme
const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
 
// Set some properties of the bot
const config = {
    botAvatar: bot,
    floating: true,
};
 
function Chatbot() {
    return (
        <div className="ChatBot">
            <ThemeProvider theme={theme}>
                <ChatBot
                    headerTitle="Chatbot"
                    steps={steps}
                    {...config}
 
                />
            </ThemeProvider>
        </div>
    );
}


// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import ChatBot from 'react-simple-chatbot';
// import { ThemeProvider } from 'styled-components';
// import CoursesPage from './CoursesPage';
// import ArticlesPage from './ArticlesPage';

// const steps = [
//   {
//     id: '0',
//     message: 'Hey Geek!',
//     trigger: '1',
//   },
//   {
//     id: '1',
//     message: 'Please write your username',
//     trigger: '2'
//   },
//   {
//     id: '2',
//     user: true,
//     trigger: '3',
//   },
//   {
//     id: '3',
//     message: "Hi {previousValue}, how can I help you?",
//     trigger: '4'
//   },
//   {
//     id: '4',
//     options: [
//       { value: 1, label: 'View Courses', trigger: 'view-courses' },
//       { value: 2, label: 'Read Articles', trigger: 'read-articles' },
//     ],
//   },
//   {
//     id: 'view-courses',
//     component: (
//       <div>
//         <a href="/courses">Click here to view courses</a>
//       </div>
//     ),
//     end: true,
//   },
//   {
//     id: 'read-articles',
//     component: (
//       <div>
//         <a href="/articles">Click here to read articles</a>
//       </div>
//     ),
//     end: true,
//   },
// ];

// const theme = {
//   background: '#f5f8fb',
//   headerBgColor: '#2196F3',
//   headerFontColor: '#fff',
//   headerFontSize: '15px',
//   botBubbleColor: '#2196F3',
//   botFontColor: '#fff',
//   userBubbleColor: '#fff',
//   userFontColor: '#4a4a4a',
// };

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <Router>
//         <Switch>
//           <Route path="/" exact>
//             <ChatBot steps={steps} />
//           </Route>
//           <Route path="/courses" component={CoursesPage} />
//           <Route path="/articles" component={ArticlesPage} />
//         </Switch>
//       </Router>
//     </ThemeProvider>
//   );
// }

// export default App;

 
export default Chatbot;






