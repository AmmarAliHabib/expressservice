import React from 'react';
import { Switch, Link, Route} from 'react-router-dom';
import Home from './HomePage/Home';
import HomeP from '../pages/HomeP';
import { ServiceProvider } from './ServiceProviderPage/serviceProvider';
import Admin from './Admin';
import Final from './Login_register/final';
import Spfinal from './Login_register/spfinal';
import VerifyOtp from './Otp/verifyOtp';
import Spfinal from './Login_register/spfinal';

export class AllComp extends React.Component {
constructor(){
    super();
        this.state={
            count: 0,
            pno: ''
    }
}

loadChangeafterOtp=(count)=>{
    this.setState({count:count})
    
}

getPhoneNumber=(pno)=>{
    this.setState({pno:pno})
}
    render() {

        return <div>
            <Switch>
                <Route path= '/verifyOtp'>
                    <VerifyOtp loadChangeafterOtp={this.loadChangeafterOtp} getPhoneNumber={this.getPhoneNumber}/>
                </Route>
                <Route exact path= '/' component={Home} exact ></Route>
<<<<<<< HEAD
                <Route path='/serviceprovider' component={ServiceProvider}></Route>
                <Route path='/service' component={HomeP}></Route>
=======
                <Route path='/serviceprovider' component={ServiceProvider} ></Route>
                <Route path='/service' component={HomeP} ></Route>
>>>>>>> 541dff092f5372a13bbe79f6a6f8c4d123d57561
                <Route path='/admin' component={Admin} ></Route>
                <Route path='/login'>
                    <Final count={this.state.count} pno={this.state.pno} />
                </Route>
<<<<<<< HEAD
                <Route path='/splogin'>
                    <Spfinal count={this.state.count} pno={this.state.pno} />
=======
                <Route path ='/splogin'>
                    <Spfinal count={this.state.count} pno={this.state.pno}  />
>>>>>>> 541dff092f5372a13bbe79f6a6f8c4d123d57561
                </Route>
            </Switch>    
            
        </div>
    }
}