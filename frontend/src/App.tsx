import { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import './styles/global.css';
import { Header } from './components/Header/Header';
import {Footer} from './components/Footer/Footer';
import { Destination } from './pages/Destination/Destination';
import BookingProcess from './pages/BookingProcess/BookingProcess';
import Services from './pages/Services/Services';
import Testimonials from './pages/Testimonials/Testimonials';
import Contact from './pages/Contact/contact';
import About from './pages/About/About';
import Gallery from './pages/Gallery/Gallery';
export default class App extends Component {
    render() {
        return <>
            <Navbar />
            <Header />
            <Services />   
            <Destination />
            <Gallery/>
            <BookingProcess />
            <Testimonials />
            <About/>
            <Contact/>
            <Footer />
        </>
    }
}