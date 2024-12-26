"use client";

import { useSubscription } from "@/hooks/use-subscribtion";
import { db } from "@/lib/firebase";
import { ChildProps } from "@/types";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect } from "react";

const SubscriptionProvider = ({ children }: ChildProps) => {
  const { user, isLoaded } = useUser();
  const { setIsLoading, setSubscription, setTotalStorage } = useSubscription();

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const { data } = await axios.get(
            `/api/subscription?email=${user?.emailAddresses[0].emailAddress}`
        );
        setSubscription(data);
    } catch (error) {
        console.error('Error fetching subscription data:', error);
        setIsLoading(false);
    }
      let files: any[] = [];
      const q = query(
        collection(db, "files"),
        where("uid", "==", user?.id),
        where("isArchive", "==", false)
      );
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        files.push({ ...doc.data(), id: doc.id });
      });
      const totalSize = files.reduce((acc, file) => acc + file.size, 0);
      setTotalStorage(totalSize);
      setIsLoading(false);
    };

    if (isLoaded && user) {
      getData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user, isLoaded]);

  return children;
};

export default SubscriptionProvider;
