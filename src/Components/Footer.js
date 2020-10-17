import React from 'react';

function Footer() {
    return (
        <div footer-container>
            <section>
                <p>
                    Subscribe to our news letters
                </p>
            </section>
            <div>
                <form>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email..."
                    />
                    <button>
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Footer;
