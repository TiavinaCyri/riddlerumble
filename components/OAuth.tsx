'use client'

import { auth } from "@/edgedb";
import IsSigned from "./isSigned";

const OAuth = () => {
    const generatePKCE = async () => {
        const array = new Uint8Array(32);
        window.crypto.getRandomValues(array);
        const verifier = base64URLEncode(array);

        const encoder = new TextEncoder();
        const data = encoder.encode(verifier);
        const hashBuffer = await window.crypto.subtle.digest('SHA-256', data);
        const challenge = base64URLEncode(new Uint8Array(hashBuffer));

        return { verifier, challenge };
    };

    function base64URLEncode(array: any) {
        return btoa(String.fromCharCode.apply(null, array))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=/g, '');
    }

    const handleAuthorize = async () => {
        const redirectUrl = new URL("authorize", 'https://enigmap--codeipsum.c-82.i.aws.edgedb.cloud/db/main/ext/auth/callback');
        redirectUrl.searchParams.set("provider", "builtin::oauth_google");
        const pkce = await generatePKCE();
        redirectUrl.searchParams.set("challenge", pkce.challenge);
        redirectUrl.searchParams.set(
            "redirect_to",
            `http://localhost:3000`,
        );
        localStorage.setItem('edgedb-pkce-verifier', pkce.verifier);
        window.location.href = redirectUrl.toString();
    };

    return (
        <div>
            <button onClick={handleAuthorize}>Sign in with Google</button>
        </div>
    )
}

export default OAuth