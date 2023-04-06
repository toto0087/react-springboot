import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';


const CustomerList: React.FC = (props: any) => {
  const { name } = useParams<{ name: string; }>();
  const [Clientes,setClientes] = useState<any>([]);


    useEffect(() =>{

        search();
        
    },[]);
    
    
    const search = () => {
        
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
                Agregar Cliente
              </IonButton>
            </IonItem>

            <IonGrid className="table">
              <IonRow>
                <IonCol>Nombre</IonCol>
                <IonCol>Email</IonCol>
                <IonCol>Teléfono</IonCol>
                <IonCol>Dirección</IonCol>
                <IonCol>Acciones</IonCol>
              </IonRow>

              <IonRow>
                <IonCol>Tobias Occhiuzzi</IonCol>
                <IonCol>tobisape5@gmail.com</IonCol>
                <IonCol>1159777634</IonCol>
                <IonCol>bucarelli</IonCol>
                <IonCol> 
                    <IonButton color="primary" fill='clear'>
                        <IonIcon icon={pencil} slot='icon-only' />
                    </IonButton>    

                    <IonButton color="danger" fill='clear'>
                        <IonIcon icon={close} slot='icon-only' />
                    </IonButton>   
                </IonCol>
              </IonRow>


            </IonGrid>
          </IonCard>


        </IonContent>






      </IonContent>
    </IonPage>
  );
};

export default CustomerList;