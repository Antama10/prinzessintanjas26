import React from 'react'
import { Button } from 'react-bootstrap'
import Fusszeile from '@/komponenten/Fusszeile';
import { useState } from 'react';
import { useId } from 'react';
import { useRouter } from 'next/router';
import { InputGroup } from 'react-bootstrap';
import { Form, ListGroupItem } from "react-bootstrap";
import { Toast } from 'react-bootstrap';

function Geschenk() {

    const router = useRouter();

    const [buttonText, setButtonText] = useState("Klick mich");
    const [buttonText2, setButtonText2] = useState("Mich auch");
    const [buttonText3, setButtonText3] = useState("Hey Ich will bitte auch!");
    const [buttonText4, setButtonText4] = useState("Wenn du mich klickst hab Ich dich ganz lieb!");

    const [code, setCode] = useState(" ");

    const [toast, setToast] = useState(false);

    const handleClick = (bTex) => {
        if (bTex === "Klick mich") {
            setButtonText("Hast du schon genug gegessen?!");
        }

        if (bTex === "Mich auch") {
            setButtonText2("Also gut Ich hoffe es hat geschmeckt ;)");
        }

        if (bTex === "Hey Ich will bitte auch!") {
            setButtonText3("Um wieder besser auf die Beine zu kommen gibt es doch nichts besseres als ein kleiner Spaziergang, oder?");
        }

        if (bTex === "Wenn du mich klickst hab Ich dich ganz lieb!") {
            setButtonText4("Also gut los gehts :) (provuzierender Smiley zum X. mal)");
        }
    };

    const Bestätige = () => {
        // setToast(false);
        if (code === "AmWXlz!") {
            router.push("/raetsel")
        } else {
            setToast(true);
        }
    }

    const Zurück = () => {
        router.push("/");
    }


    return (
        <div>
            <div className='text-center mt-4'>
                <Button
                    variant="danger"
                    className="px-4 py-2 fw-semibold"
                    onClick={() => handleClick("Klick mich")}
                >
                    {buttonText}
                </Button>
                <div className='mt-2'>
                    <Button
                        variant="success"
                        className="px-4 py-2 fw-semibold"
                        onClick={() => handleClick("Mich auch")}
                    >
                        {buttonText2}
                    </Button>
                </div>
                <Button
                    variant="success mt-2"
                    className="px-4 py-2 fw-semibold"
                    onClick={() => handleClick("Hey Ich will bitte auch!")}
                >
                    {buttonText3}
                </Button>
                <p>
                    <Button
                        variant="success mt-2"
                        className="px-4 py-2 fw-semibold"
                        onClick={() => handleClick("Wenn du mich klickst hab Ich dich ganz lieb!")}
                    >
                        {buttonText4}
                    </Button>
                </p>
            </div>


            <div className='fixed-bottom'>

            </div>
            <div className='fixed-bottom'>
                <ListGroupItem>
                    <Form.Group className="mt-2" controlId="marke">
                        <Form.Control type="text" placeholder="Erhaltenen Code hier eingeben!" onChange={(e) => setCode(e.target.value)} />
                    </Form.Group>
                </ListGroupItem>
                <Button
                    variant="danger mt-1 w-100"
                    className="px-4 py-2 fw-semibold"
                    onClick={Bestätige}
                >
                    {code} <br />
                    Bestätigen
                </Button>
                <Button variant="success" className="mt-2 px-4 py-2 fw-semibold" onClick={Zurück}>
                    Zurück
                </Button>
            </div>
            {toast ? (
                <Toast className="fixed-top w-100">
                    <Toast.Header>
                        <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" />
                        <strong className="me-auto">Buchung</strong>
                        <small>11 mins ago</small>
                    </Toast.Header>
                    <Toast.Body>Falscher Code</Toast.Body>
                </Toast>
            ) : (
                <></>
            )}
        </div >
    )
}


export default Geschenk
