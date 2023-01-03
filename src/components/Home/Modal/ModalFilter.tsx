import {
    Modal,
    View,
    TouchableWithoutFeedback,
    Text,
    Switch,
    TouchableOpacity,
  } from "react-native";
import React from "react";
import { styles } from "./styles";
import { Ionicons } from '@expo/vector-icons'; 
import { ButtonSearch } from "../Button/ButtonSearch";
import { GameContext } from "../../../context/GameContext";
 
  
export const ModalFilter = ({
    isSelectedModal,
    setIsSelectedModal,
    onPress
  }) => {
  
    const [uri, setURI] = React.useState<string>("/games")
    const [category, setCategory] = React.useState<string>("")
    const [lowSpec, setLowSpec] = React.useState<string>("")
    const [perspective, setPerspective] = React.useState<string>("")
    const { setCategoryURI } = React.useContext(GameContext)

    const mountURI = () => {
        if(category == "" && lowSpec != "" ||  perspective != ""){
            setURI(`/filter?tag=${lowSpec}${perspective}`)
        }else if(category !== ""){
            setURI(`/filter?tag=${category}.${lowSpec}${perspective}`)
        }else if(category == ""){
             setURI('/games')
        }
    }

    const filtering = async () => {
        await mountURI()
        await setCategoryURI(uri)
        console.log(uri)
        onPress()
        closeModal()
    }

    const closeModal = () => {
        setIsSelectedModal(false);
        setCategory("");
        setLowSpec("");
        setPerspective("");
        setURI("/games")
    }

    const handleLowSpec = () => {
        lowSpec == "low-spec" ? setLowSpec("") : setLowSpec("low-spec")
    }

    const selectCategory = (tag) => {
        category == tag ? setCategory("") : setCategory(tag)
    }

    const selectPerspective = (tag) => {
        perspective == tag ? setPerspective("") : setPerspective(tag)
    }

    React.useEffect(() => {
        mountURI()
    }, [category, lowSpec, perspective])
  
    return (
      <Modal
        animationType="slide"
        transparent={true}

        visible={isSelectedModal}
        onRequestClose={() => {
          closeModal()
        }}
      >
        <TouchableWithoutFeedback onPress={() => closeModal()}>
          <View style={styles.modalOverlay} />
        </TouchableWithoutFeedback>
  
        {/* Content */}
        <View
          style={styles.modalContentView}
        >
            <View style={styles.boxCandP}>
                <Text style={styles.subtitle}>Category</Text>
                <View style={styles.perspectiveBox}>
                <Ionicons name="ios-cube-sharp" size={22} color="#dedede" />
                <View style={styles.selectBox}>
                    <TouchableOpacity style={{width:'50%'}}>
                        <Text
                            onPress={() => selectPerspective('.2d')}
                            style={{...styles.perspectiveText,
                                backgroundColor: perspective == '.2d' ? '#4611ad' : '#0d0d0f',
                                borderColor: perspective == '.2d' ? '#4611ad' : '#0d0d0f'
                            }}>
                                2D
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{width:'50%'}}>
                        <Text
                            onPress={() => selectPerspective('.3d')}
                            style={{...styles.perspectiveText,
                                backgroundColor: perspective == '.3d' ? '#4611ad' : '#0d0d0f',
                                borderColor: perspective == '.3d' ? '#4611ad' : '#0d0d0f'
                            }}
                        >
                            3D
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
            <View style={styles.categoryBox}>
                <Text style={{...styles.categoryText, color: category == "mmorpg" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("mmorpg")}>MMORPG</Text>
                <Text style={{...styles.categoryText, color: category == "shooter" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("shooter")}>Shooter</Text>
                <Text style={{...styles.categoryText, color: category == "strategy" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("strategy")}>Strategy</Text>
                <Text style={{...styles.categoryText, color: category == "moba" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("moba")}>Moba</Text>
                <Text style={{...styles.categoryText, color: category == "racing" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("racing")}>Racing</Text>
                <Text style={{...styles.categoryText, color: category == "sports" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("sports")}>Sports</Text>
                <Text style={{...styles.categoryText, color: category == "social" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("social")}>Social</Text>
                <Text style={{...styles.categoryText, color: category == "sandbox" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("sandbox")}>Sandbox</Text>
                <Text style={{...styles.categoryText, color: category == "open-world" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("open-world")}>Open-World</Text>
                <Text style={{...styles.categoryText, color: category == "survival" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("survival")}>Survival</Text>
                <Text style={{...styles.categoryText, color: category == "pvp" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("pvp")}>PVP</Text>
                <Text style={{...styles.categoryText, color: category == "pixel" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("pixel")}>Pixel</Text>
                <Text style={{...styles.categoryText, color: category == "voxel" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("voxel")}>Voxel</Text>
                <Text style={{...styles.categoryText, color: category == "zombie" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("zombie")}>Zombie</Text>
                <Text style={{...styles.categoryText, color: category == "turn-based" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("turn-based")}>Turn-Based</Text>
                <Text style={{...styles.categoryText, color: category == "pve" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("pve")}>PVE</Text>
                <Text style={{...styles.categoryText, color: category == "first-person" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("first-person")}>First-Person</Text>
                <Text style={{...styles.categoryText, color: category == "sci-fi" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("sci-fi")}>Sci-Fi</Text>
                <Text style={{...styles.categoryText, color: category == "third-Person" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("third-Person")}>Third-Person</Text>
                <Text style={{...styles.categoryText, color: category == "top-down" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("top-down")}>Top-Down</Text>
                <Text style={{...styles.categoryText, color: category == "tank" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("tank")}>Tank</Text>
                <Text style={{...styles.categoryText, color: category == "space" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("space")}>Space</Text>
                <Text style={{...styles.categoryText, color: category == "sailing" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("sailing")}>Sailing</Text>
                <Text style={{...styles.categoryText, color: category == "side-scroller" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("side-scroller")}>Side-Scroller</Text>
                <Text style={{...styles.categoryText, color: category == "superhero" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("superhero")}>Superhero</Text>
                <Text style={{...styles.categoryText, color: category == "permadeath" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("permadeath")}>Permadeath</Text>
                <Text style={{...styles.categoryText, color: category == "card" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("card")}>Card</Text>
                <Text style={{...styles.categoryText, color: category == "battle-royale" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("battle-royale")}>Battle-Royale</Text>
                <Text style={{...styles.categoryText, color: category == "mmo" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("mmo")}>MMO</Text>
                <Text style={{...styles.categoryText, color: category == "fantasy" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("fantasy")}>Fantasy</Text>
                <Text style={{...styles.categoryText, color: category == "fighting" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("fighting")}>Fighting</Text>
                <Text style={{...styles.categoryText, color: category == "mmofps" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("mmofps")}>MMOFPS</Text>
                <Text style={{...styles.categoryText, color: category == "action-rpg" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("action-rpg")}>Action-RPG</Text>
                <Text style={{...styles.categoryText, color: category == "military" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("military")}>Military</Text>
                <Text style={{...styles.categoryText, color: category == "mmotps" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("mmotps")}>MMOTPS</Text>
                <Text style={{...styles.categoryText, color: category == "action" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("action")}>Action</Text>
                <Text style={{...styles.categoryText, color: category == "martial-arts" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("martial-arts")}>Martial-Arts</Text>
                <Text style={{...styles.categoryText, color: category == "flight" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("flight")}>Flight</Text>
                <Text style={{...styles.categoryText, color: category == "tower-defense" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("tower-defense")}>Tower-Defense</Text>
                <Text style={{...styles.categoryText, color: category == "horror" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("horror")}>Horror</Text>
                <Text style={{...styles.categoryText, color: category == "mmorts" ? '#4611ad' : '#8a8a8a'}} onPress={() => selectCategory("mmorts")}>MMORTS</Text>
            </View>
            <View style={styles.lowSpecBox}>
                <Text style={styles.subtitle}>Low-Spec</Text>
                <Switch
                    value={lowSpec == "low-spec"}
                    onValueChange={() => handleLowSpec()}
                    thumbColor={'#4611ad'}
                    trackColor={{ false: '#18181b', true: '#2e0b74'}}
                />
            </View>
            <ButtonSearch onPress={() => filtering()}/>
        </View>
      </Modal>
    );
  }