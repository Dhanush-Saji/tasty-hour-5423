import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  FormControl,
  FormLabel,
  Input,
  useQuery,
} from "@chakra-ui/react";

const SmallScreenSearchModal = ({ state, handleQuerry }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div className="visible_nav_text_smallscreen">
      <Button onClick={onOpen}>
        <FiSearch />
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody p={6}>
            <Input
              placeholder={`You are searching for ${state}`}
              marginTop="4"
              onChange={(e) => handleQuerry(e.target.value)}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Search
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default SmallScreenSearchModal;
