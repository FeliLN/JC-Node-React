import { collection, doc, getDocs, addDoc, deleteDoc, updateDoc  } from 'firebase/firestore';
import db from '../FirebaseConfig';
import { uploadBytes, ref, getDownloadURL } from "firebase/storage";
import { storage } from '../FirebaseConfig';
import Swal from 'sweetalert2';

export const obtainData = async (props) => {
    try {
        const data = await getDocs(collection(db, props))
        return data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener los productos',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const getProducts = async (product) => {
    try {
        const data = await getDocs(collection(db, product));
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener los productos',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const createProduct = async (newItem, product) => {
    try {
        Swal.fire({
            title: 'Producto agregado',
            text: 'El producto se ha agregado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await addDoc(collection(db, product), newItem);
        window.location.reload();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'Revisa si los campos se rellenaron correctamente',
            })
        console.log(error);
    }
}

export const updateProduct = async (id, newItem, product) => {
    try {
        Swal.fire({
            title: 'Producto actualizado',
            text: 'El producto se ha actualizado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await updateDoc(doc(db, product, id), newItem);
        window.location.reload();
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La edición no se ha podido realizar',
            })
    }
}

export const deleteProduct = async (id, product) => {
    try {
        Swal.fire({
            title: 'Producto eliminado',
            text: 'El producto se ha eliminado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
        })
        await deleteDoc(doc(db, product, id));
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'El producto no se ha podido eliminar',
            })
    }
}

export const uploadImage = async (image, product) => {
    try { 
        const storageRef = ref(storage, `${product}/${image.name}`);
        uploadBytes(storageRef, image);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La imagen no se ha podido subir',
            })
    }
}

export const getImages = async (image, product) => {
    try {
        let imageURL
        const storageRef = ref(storage, `${product}/${image.name}`);
        await getDownloadURL(storageRef).then(url => {
            imageURL = url
            })
        return imageURL;
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'No se ha podido acceder a la imagen',
            })
    }
}

export const getContact = async () => {
    try {
        const data = await getDocs(collection(db, 'Contacto'));
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        console.log(error);
    }
}

export const updateContact = async (id, newData) => {
    try {
        Swal.fire({
            title: 'Contacto actualizado',
            text: 'El contacto se ha actualizado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await updateDoc(doc(db, 'Contacto', id), newData);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La edición no se ha podido realizar',
            })
    }
}

export const getMessages = async () => {
    try {
        const data = await getDocs(collection(db, 'Mensajes'));
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener los mensajes',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const deleteMessage = async (id) => {
    try {
        await deleteDoc(doc(db, 'Mensajes', id));
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'El mensaje no se ha podido eliminar',
            })
    }
}

export const publicMessage = async (newMessage) => {
    try {
        Swal.fire({
            title: 'Mensaje enviado',
            text: 'El mensaje se ha enviado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await addDoc(collection(db, 'Mensajes'), newMessage);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'El mensaje no se ha podido enviar',
            })
    }
}

export const getNovedades = async () => {
    try {
        const data = await getDocs(collection(db, 'Novedades'));
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener las novedades',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const createNovedades = async (newData) => {
    try {
        Swal.fire({
            title: 'Novedad creada',
            text: 'La novedad se ha creado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await addDoc(collection(db, 'Novedades'), newData);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La novedad no se ha podido crear',
            })
    }
}

export const updateNovedades = async (id, newData) => {
    try {
        Swal.fire({
            title: 'Novedad actualizada',
            text: 'La novedad se ha actualizado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await updateDoc(doc(db, 'Novedades', id), newData);
        window.location.reload()
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La edición no se ha podido realizar',
            })
    }
}

export const deleteNovedades = async (id) => {
    try {
        await deleteDoc(doc(db, 'Novedades', id));
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La novedad no se ha podido eliminar',
            })
    }
}

export const getNosotros = async () => {
    try {
        const data = await getDocs(collection(db, 'Nosotros'));
        return data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        Swal.fire({
            title: 'Error',
            text: 'No se pudo obtener la información',
            icon: 'error',
            confirmButtonText: 'Ok',
            timer: 2000
        })
    }
}

export const updateNosotros = async (id, newData) => {
    try {
        Swal.fire({
            title: 'Información actualizada',
            text: 'La información se ha actualizado correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar',
            timer: 2000
            })
        await updateDoc(doc(db, 'Nosotros', id), newData);
    } catch (error) {
        Swal.fire({
            icon: 'error',
            timer: 3000,
            title: 'Algo salió mal :S',
            text: 'La edición no se ha podido realizar',
            })
    }
}