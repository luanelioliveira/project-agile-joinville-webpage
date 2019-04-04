import firebase from "firebase";
import router from "@/router";

const signUp = ({ commit }, payload) => {
    commit("Application/SET_ERROR", null, { root: true });
    commit("Application/SET_LOADING", true, { root: true });
    firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
    .then(function () {
        commit("SET_CURRENT_USER", payload);
        commit("SET_AUTHENTICATED", true);
        commit("Application/SET_LOADING", false, { root: true });
        router.push("/profile");
    })
    .catch(error => {
        commit("Application/SET_LOADING", false, { root: true });
        commit("Application/SET_ERROR", error.message, { root: true });
    });
};

const signIn = ({ commit }, payload) => {
    commit("Application/SET_ERROR", null, { root: true });
    commit("Application/SET_LOADING", true, { root: true });
    firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
    .then(function () {
        commit("SET_CURRENT_USER", payload);
        commit("SET_AUTHENTICATED", true);
        commit("Application/SET_LOADING", false, { root: true })     
        router.push("/profile");   
    })
    .catch(error => {
        commit("Application/SET_ERROR", error.message, { root: true });
        commit("Application/SET_LOADING", false, { root: true });
    });
};

const signOut = ({ commit }) => {
    firebase.auth().signOut().then(() => {
        commit("SET_CURRENT_USER", null);
        commit("SET_AUTHENTICATED", false);
        router.push("/");
    }).catch(() => {
        commit("SET_CURRENT_USER", null);
        commit("SET_AUTHENTICATED", false);
        router.push("/");
    });
};

export default {
    signOut,
    signIn,
    signUp
}