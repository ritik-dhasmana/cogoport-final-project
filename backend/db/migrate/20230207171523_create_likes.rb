class CreateLikes < ActiveRecord::Migration[7.0]
  def change
    create_table :likes do |t|
      t.belongs_to :article 
      t.belongs_to :user
      t.timestamps
    end
    add_column :articles, :likes_count, :integer, default: 0
  end
end
