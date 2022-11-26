import React from "react";
import "../styles/profile.css";

export default class Profile extends React.Component {
    render() {
        return (
        
        <main>
            <div className="profile-window">
                <div className="profile-photo">
                    <img src={require("../images/photo.png")} alt="photo" />
                </div>
                <p className="profile-text">
                    <p className="profile-login">Login: {this.props.login}</p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut perspiciatis ipsam dolor modi eaque atque veritatis dolorem officiis mollitia corporis sunt temporibus, similique ea qui eius exercitationem. Illo, nobis illum!
                Quis, iusto, esse suscipit culpa animi porro debitis a ratione ducimus ipsam expedita reprehenderit aliquam sapiente non tempore incidunt, odit officiis excepturi tempora. Rerum, ducimus nam molestias pariatur eligendi quas.
                Voluptates commodi, reprehenderit maxime officia odio iusto? Aut asperiores exercitationem facere odio molestias ad repudiandae, adipisci placeat qui! Ullam fuga dolorum adipisci fugiat voluptate a, ex officiis animi eaque deleniti!
                Quis voluptates tempore illum nihil reiciendis mollitia, nesciunt, voluptate adipisci obcaecati facilis qui harum molestias! Deserunt enim sunt alias sapiente, a neque eum incidunt iure numquam cupiditate molestiae consequuntur! Debitis?
                Qui atque officia in assumenda rem aperiam eos distinctio. Consequuntur, laborum rerum. Ad porro expedita maiores dicta iure est natus architecto magni harum eveniet, animi et corrupti, nulla quaerat vitae.
                Esse odit quibusdam iste adipisci! Praesentium molestias ratione corporis, est dolorum amet itaque dignissimos, quae tenetur at temporibus ut nam modi perferendis repellendus blanditiis nobis sapiente sunt voluptatibus eveniet laboriosam.
                Eveniet veniam eligendi ex totam aliquam, assumenda eaque voluptas ratione adipisci dolorum molestiae distinctio iusto explicabo autem impedit facere vel hic, corrupti, obcaecati placeat accusantium tempore! Nihil veritatis harum similique.
                Voluptate, facere nam rem inventore ipsum exercitationem quam perferendis dicta laborum numquam magnam quis adipisci tenetur quo illum cum iure ducimus qui nemo odit eum incidunt distinctio? Amet, autem voluptate?
                Eaque quia deleniti molestiae quos doloribus sapiente nemo esse ratione cum ducimus quam obcaecati, reprehenderit dolore, maxime exercitationem quod maiores delectus. Neque laboriosam, enim harum exercitationem aliquid expedita consequuntur at!
                Officiis minus ducimus possimus quod temporibus! Consequatur nisi ab praesentium quaerat, iure alias cupiditate magni assumenda nostrum quas. Ullam consequuntur dolores repellendus similique unde ipsum dolore illum iusto quia fuga.</p>
            </div>
        
        </main>
        
        );
        
    }
}