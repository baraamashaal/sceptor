export interface Credential {
    accessToken:    string;
    client:         string;
    expiry:         string;
    tokenType:      string;
    uid:            string;
};




export interface UserData {
    id:             number;
    provider:       string;
    uid:            string;
    name:           string;
    nickname:       string;
    image:          any;
    email:          string;
}