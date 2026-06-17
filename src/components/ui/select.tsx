import * as React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Modal, FlatList, Platform } from "react-native";

interface SelectProps {
  value: string;
  onValueChange: (value: string) => void;
  options: { label: string; value: string }[];
}

export function Select({ value, onValueChange, options }: SelectProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const selectedOption = options.find(opt => opt.value === value);

  const handleSelect = (val: string) => {
    onValueChange(val);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      {/* Bouton de déclenchement */}
      <TouchableOpacity style={styles.trigger} onPress={() => setIsOpen(!isOpen)}>
        <Text style={styles.triggerText}>
          {selectedOption ? selectedOption.label : "Sélectionner un rôle"}
        </Text>
        <Text style={styles.arrow}>⌃</Text>
      </TouchableOpacity>

      {/* Menu déroulant (Style Popover Shadcn) */}
      {isOpen && (
        <View style={styles.dropdown}>
          {options.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={[
                styles.optionItem,
                item.value === value && styles.optionItemActive,
              ]}
              onPress={() => handleSelect(item.value)}
            >
              <View style={styles.optionContent}>
                {item.value === value && <Text style={styles.checkIcon}>✓ </Text>}
                <Text style={[styles.optionText, item.value === value && styles.optionTextActive]}>
                  {item.label}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 6,
    zIndex: 50, // Très important pour passer au-dessus du bouton sur le Web
  },
  trigger: {
    height: 46,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    borderWidth: 1,
    borderColor: "rgba(255, 255, 255, 0.15)",
    borderRadius: 8,
    paddingHorizontal: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  triggerText: { color: "#ffffff", fontSize: 14 },
  arrow: { color: "rgba(255, 255, 255, 0.4)", transform: [{ rotate: "180deg" }], fontSize: 12 },
  
  dropdown: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    marginTop: 4,
    padding: 4,
    borderWidth: 1,
    borderColor: "#e4e4e7",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    ...Platform.select({
      web: { position: "absolute", top: 46, left: 0, right: 0 }
    })
  },
  optionItem: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  optionItemActive: {
    backgroundColor: "#f4f4f5",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  checkIcon: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#09090b",
  },
  optionText: {
    fontSize: 14,
    color: "#71717a",
  },
  optionTextActive: {
    color: "#09090b",
    fontWeight: "500",
  },
});