import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { removeCustomer, saveCustomer, searchCustomer } from './CustomerApi';


const CustomerEdit: React.FC = (props: any) => {
  const { name,id } = useParams<{ name: string; id: string;}>();
  const [Clientes,setClientes] = useState<any>([]);


    useEffect(() =>{

        search();
        
    },[]);
    
    
    const search = () => {
    // let result=searchCustomer();    
    // setClientes(result);
    }

    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>





        <IonContent>
          <IonCard>
            <IonTitle>Gestión de Clientes</IonTitle>

            <IonItem>
              <IonButton color="primary" fill="solid" slot="end" size="default">
                <IonIcon icon={add} />
                Guardar
              </IonButton>
            </IonItem>


          </IonCard>

        </IonContent>

      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;