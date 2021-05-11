import React, { Component } from 'react'
import useSound from 'use-sound';
import talonsSfx from '../assets/audio/largetalons.mp3';

export default class Footer extends Component {
    render() {

        const TalonsEasterEgg = () => {
            const [play] = useSound(talonsSfx);
            return <div onClick={play} className="small text-center text-muted">© 2021 - danpops.ca</div>;
        };

        return (
            <div>
                <footer className="bg-light py-5">
                    <div className="container">
                        <TalonsEasterEgg />
                    </div>
                </footer>
            </div>
        )
    }
}