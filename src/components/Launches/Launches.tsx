import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import Card from "../Card/Card";
import Modal from "../Modal/Modal";

import styles from "./Launches.module.css";

export const LAUNCHES_QUERY = gql`
query GetLaunches($limit: Int!) {
  launches(limit: $limit) {
    id
    name
    date_utc
    rocket {
      id
      name
    }
    links {
      mission_patch_small
    }
    launchpad {
      id
      name
    }
  }
}
`;
const Launches = () => {
  interface LaunchProps {
    id: string;
    name: string;
    launchpad?: {
      id: string;
      name: string;
    };
    links: {
      mission_patch_small: string;
    };
    date_utc?: string;
    rocket?: {
      id: string;
      name: string;
    };
  }

  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedLaunch, setSelectedLaunch] = useState<LaunchProps | null>(
    null
  );

  const limit = 6;
  const { loading, error, data } = useQuery(LAUNCHES_QUERY, {
    variables: { limit },
  });

  const open = (id: string) => {
    const launch = data.launches.find(
      (launch: LaunchProps) => launch.id === id
    );
    setSelectedLaunch(launch);
    setModalOpen(true);
  };

  const close = () => {
    setModalOpen(false);
    setSelectedLaunch(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
console.log(selectedLaunch)
  return (
    <>
      <div className={styles["grid"]}>
        {data.launches.map(({ name, links, id }: LaunchProps) => (
          <div key={id} className={styles["item"]}>
            <Card>
              <h5 className={styles["title"]}>{name}</h5>
              <img
                src={links.mission_patch_small}
                className="card-img"
                alt={name}
              />

              <button
                onClick={() => {
                  open(id);
                }}
                aria-label="Open details"
                className={styles["primary"]}
              >
                Details
              </button>
            </Card>
          </div>
        ))}
      </div>

      {modalOpen && selectedLaunch && (
        <Modal>
          <Card>
            <button
              onClick={close}
              aria-label="Close details"
              className={styles["close"]}
            >
              <span>X</span>
            </button>
            <h2 className={styles["title"]}>{selectedLaunch.name}</h2>

            <div className={styles["row"]}>
              <div>
                <p><b>Launch date:</b> {selectedLaunch.date_utc ? new Date(selectedLaunch.date_utc).toLocaleDateString() : ""} </p>
                <p><b>Rocket name:</b> {selectedLaunch.rocket?.name}</p>
                <p><b>Launchpad:</b> {selectedLaunch.launchpad?.name}</p>

              </div>
              <img
                src={selectedLaunch.links.mission_patch_small}
                className="card-img"
                alt={selectedLaunch.name}
              />
            </div>
          </Card>
        </Modal>
      )}
    </>
  );
};

export default Launches;
