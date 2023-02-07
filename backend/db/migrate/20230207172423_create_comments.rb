class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.belongs_to :article
      t.belongs_to :user
      t.string :text
      t.timestamps
    end
    add_column :articles, :comments_count, :integer, default: 0

  end
end
